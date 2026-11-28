from flask import Flask,jsonify,request,render_template
from bussiness import fetching_data




app= Flask(__name__)

@app.route("/")

def homepage():
    return render_template("indexx.html")

@app.route("/api")

def fetching():

    data=fetching_data()


    data={
        'name':data
    }

    return jsonify(data)



app.run(debug=True,port=5005,host="0.0.0.0")


