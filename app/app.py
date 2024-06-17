from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config.Config')

db = SQLAlchemy(app)

from models import User

@app.route("/escuela")
def escuela():
    return render_template("escuela.html")

@app.route("/registro", methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        R_usuario = request.form['R_usuario']
        R_email = request.form['R_email']
        R_clave = request.form['R_clave']
        
        if R_usuario and R_email and R_clave:
            new_user = User(usuario=R_usuario, email=R_email, clave=R_clave)
            try:
                db.session.add(new_user)
                db.session.commit()
                return redirect(url_for('sesion'))
            except Exception as e:
                db.session.rollback()
                flash(f'Error al ejecutar la consulta: {e}')
        else:
            flash('Llena todos los campos')
    return render_template('register.html')

@app.route("/sesion", methods=['GET', 'POST'])
def sesion():
    if request.method == 'POST':
        I_email = request.form['I_correo']
        I_clave = request.form['I_clave']
        
        user = User.query.filter_by(email=I_email, clave=I_clave).first()
        
        if user:
            flash('Inicio de sesión exitoso')
            return redirect(url_for('escuela'))
        else:
            flash('Correo o contraseña incorrectos')
    return render_template('login.html')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)


# @app.route("/registro" , methods=['GET', 'POST'])
# def registro():
    # if request.method == 'POST':
    # R_usuario = request.form['R_usuario']
    # R_email = request.form['R_email']
    # R_clave = request.form['R_clave']
    
    # if R_usuario and R_email and R_clave:
    # new_user = User(usuario=R_usuario , correo=R_email, clave=R_clave)
    # try:
    # db.session.add(new_user)
    # db.session.commit()
    # return redirect(url_for('login'))
    # except Exception as e:
    # db.session.rollback()
    # flash ('error al ejecutar la consulta {e}')
    # else
        # flash ('Llena todos los campos')
# return render_template('I.sesion.html')
    
# app.route("/sesion" , methods=['GET', 'POST'])
# def sesion():
    # if request.method == 'POST':
    # I_email = request.form['I_correo']
    # I_clave = request.form['I_clave']
    
    # user = User.query.filter_by(email=I_email, clave=I_clave).first()
    
    # if user:
            # flash('Inicio de sesión exitoso')
            # return redirect(url_for('escuela'))
        # else:
            # flash('Correo o contraseña incorrectos')
    # return render_template('login.html')
    
# if __name__ == "__main__":
    # with app.app_context():
    # db.create_all()
    # app.run(debug=True)