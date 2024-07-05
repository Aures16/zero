from app import app, mysql
from flask import request, jsonify
import joblib
import pandas as pd
import os

# Définir le chemin du fichier modèle
current_dir = os.path.dirname(os.path.abspath(__file__))
joblib_file = os.path.join(current_dir, "svm_model.pkl")

# Vérifier si le fichier existe
if not os.path.exists(joblib_file):
    raise FileNotFoundError(f"Le fichier modèle {joblib_file} n'a pas été trouvé.")
else:
    raise FileNotFoundError(f"Le fichier modèle {joblib_file} a été trouvé.")
# Charger le modèle
svm_model = joblib.load(joblib_file)

@app.route('/predict', methods=['POST'])
def predict():
    # Obtenir les données de la requête
    data = request.get_json(force=True)
    # Convertir les données en DataFrame
    input_data = pd.DataFrame([data])
    # Faire les prédictions
    prediction = svm_model.predict(input_data)
    prediction_prob = svm_model.predict_proba(input_data)[0]
    # Récupérer les précisions stockées dans le modèle
    precision_eligible = svm_model.named_steps['classifier'].precision_eligible
    precision_non_eligible = svm_model.named_steps['classifier'].precision_non_eligible
    # Créer la réponse
    if prediction[0] == 1:
        message = "Votre client est éligible au prêt."
    else:
        message = "Votre client n'est pas éligible au prêt."

    response = {
        'prediction': int(prediction[0]),
        'prediction_prob': {
            'non_eligible': float(prediction_prob[0]),
            'eligible': float(prediction_prob[1])
        },
        'precision_eligible': precision_eligible,
        'precision_non_eligible': precision_non_eligible,
        'message': message
    }

    return jsonify(response)

@app.route('/get_data', methods=['GET'])
def get_data():
    cursor = mysql.cursor(dictionary=True)
    cursor.execute('SELECT * FROM user')
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)


@app.route('/register_emprunteur', methods=['POST'])
def register_emprunteur():
    data = request.get_json()
    cursor = mysql.cursor(dictionary=True)
    query = """
    INSERT INTO emprunteurs (nom_emprunteur, prenom_emprunteur, email_emprunteur, telephone_emprunteur, emploi_emprunteur, password_emprunteur)
    VALUES (%s, %s, %s, %s, %s, %s)
    """
    cursor.execute(query, (data['nom'], data['prenom'], data['email'], data['telephone'], data['emploi'], data['password']))
    cursor.commit()
    cursor.close()
    return jsonify({"message": "Emprunteur registered successfully"}), 201

@app.route('/get_emprunteur/<int:id>', methods=['GET'])
def get_emprunteur(id):
    cursor = mysql.cursor(dictionary=True)
    cursor.execute("SELECT * FROM emprunteurs WHERE id_emprunteur = %s", (id,))
    emprunteur = cursor.fetchone()
    cursor.commit()
    cursor.close()
    return jsonify(emprunteur)

@app.route('/register_analyste', methods=['POST'])
def register_analyste():
    data = request.get_json()
    cursor = mysql.cursor(dictionary=True)
    query = """
    INSERT INTO analyste_risque (nom_analyste, prenom_analyste, email_analyste, password_analyste)
    VALUES (%s, %s, %s, %s)
    """
    cursor.execute(query, (data['nom'], data['prenom'], data['email'], data['password']))
    cursor.commit()
    cursor.close()
    return jsonify({"message": "Analyste de risque registered successfully"}), 201

@app.route('/register_admin', methods=['POST'])
def register_admin():
    data = request.get_json()
    cursor = mysql.cursor(dictionary=True)
    query = """
    INSERT INTO admin (nom_admin, prenom_admin, email_admin, password_admin)
    VALUES (%s, %s, %s, %s)
    """
    cursor.execute(query, (data['nom'], data['prenom'], data['email'], data['password']))
    cursor.commit()
    cursor.close()
    return jsonify({"message": "Admin registered successfully"}), 201

@app.route('/list_emprunteurs/<string:statut>', methods=['GET'])
def list_emprunteurs(statut):
    cursor = mysql.cursor(dictionary=True)
    query = """
    SELECT e.*
    FROM emprunteurs e
    JOIN demandes_pret dp ON e.id_emprunteur = dp.id_emprunteur
    WHERE dp.statut = %s
    """
    cursor.execute(query, (statut,))
    emprunteurs = cursor.fetchall()
    cursor.close()
    return jsonify(emprunteurs)
emprunteurs = {}
@app.route('/emprunteur/<email>/demande', methods=['POST'])
def submit_demande(email):
    data = request.json
    nouvelle_demande = {
        "montant": data.get('montant'),
        "objet": data.get('objet'),
        "self_employed": data.get('self_employed'),
        "duree_pret": data.get('duree_pret'),
        "nbre_charge": data.get('nbre_charge'),
        "historique_credit": data.get('historique_credit'),
        "marier": data.get('marier'),
        "sexe": data.get('sexe'),
        "zone_habitation": data.get('zone_habitation'),
        "education": data.get('education'),
        "revenu_mensuel": data.get('revenu_mensuel'),
        "revenu_conjoint": data.get('revenu_conjoint'),
        "type_pret": data.get('type_pret'),
        "date_remb": data.get('date_remb'),
        "photo_identite": data.get('photo_identite'),
        "piece_identite": data.get('piece_identite'),
        "id_emprunteur": email,
        "statut": "en attente"
    }

    if email not in emprunteurs:
        return jsonify({"message": "Emprunteur not found"}), 404

    emprunteurs[email]['demandes'].append(nouvelle_demande)
    return jsonify({"message": "Demande soumise avec succès"}), 200


if __name__ == '__main__':
    app.run(debug=True)
