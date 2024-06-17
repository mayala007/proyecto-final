from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'datos'
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    clave = db.Column(db.String(50), nullable=False)

# from app import db

# class User(db.Model):
    # __tablename__='datos'
    # id = db.Column(db.Integer, primary_key=True)
    # usuario=db.Column(db.String(50),nullable=false)
    # email=db.Column(db.String(50),nullable=false)
    # clave=db.Column(db.String(50),nullable=false)