#main.py
from flask import Flask, jsonify, request
from db import get_songs, add_songs

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def songs():
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400  

        add_songs(request.get_json())
        return 'Song Added'

    return get_songs()    

if __name__ == '__main__':
    app.run()
