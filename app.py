from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

#Init app
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
#Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#Initialize db
db = SQLAlchemy(app)
#Initialize Marshmallow
ma = Marshmallow(app)

#Job Class/Model
class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    university = db.Column(db.String(100))
    desc = db.Column(db.String(10000))

    def __init__(self, name, university, desc):
        self.name = name
        self.university = university
        self.desc = desc

#Job Schema
class JobSchema(ma.Schema):
    class Meta:
        fields = ('name', 'university', 'desc')

#Init Schema
job_schema = JobSchema()
jobs_schema = JobSchema(many=True)

#Create a Job
@app.route('/job', methods=['POST'])
def add_job():
    json_data = request.json
    name = json_data['name']
    university = json_data['university']
    desc = json_data['desc']

    new_job = Job(name, university, desc)

    db.session.add(new_job)
    db.session.commit()

    return job_schema.jsonify(new_job)

#Get all Jobs
@app.route('/job', methods=['GET'])
def get_jobs():
    all_jobs = Job.query.all()
    result = jobs_schema.dump(all_jobs)
    return jsonify(result)

#Run server
if __name__ == "__main__":
    app.run(debug=True)
