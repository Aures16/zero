from app import app, mysql
from flask import request, jsonify

@app.route('/get_data', methods=['GET'])
def get_data():
    cursor = mysql.cursor(dictionary=True)
    cursor.execute('SELECT * FROM user')
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)
print(jsonify(data))