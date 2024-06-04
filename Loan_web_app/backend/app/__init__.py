from flask import Flask
import mysql.connector

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'Brice'
app.config['MYSQL_PASSWORD'] = 'Brice/127.0.0.1/AdminDB'
app.config['MYSQL_DB'] = 'creditsmart'

mysql = mysql.connector.connect(
    host=app.config['MYSQL_HOST'],
    user=app.config['MYSQL_USER'],
    password=app.config['MYSQL_PASSWORD'],
    database=app.config['MYSQL_DB']
)