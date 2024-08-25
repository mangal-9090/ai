from flask import Flask, render_template, request, jsonify
import mysql.connector
import random
import string

app = Flask(__name__)

def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='complaint_db'
        )
        if conn.is_connected():
            print("Connected to the database successfully!")
        return conn
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None

@app.route('/')
def home():
    return render_template('index.html')  # Ensure this line is correct

@app.route('/submit_complaint', methods=['POST'])
def submit_complaint():
    # Your complaint submission code
    pass

if __name__ == '__main__':
    app.run(debug=True)
