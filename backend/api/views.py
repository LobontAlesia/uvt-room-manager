from rest_framework.response import Response
from rest_framework.decorators import api_view
import sqlite3 as sql
from . import crypto, db

@api_view(['GET'])
def getData(request, username='alex', password='da'):
    con = sql.connect('../db/db.db')
    cur = con.cursor()
    cres = cur.execute("SELECT * FROM users WHERE username='"+username +"'")
    res = cres.fetchone()
    print(res[1])
    con.commit()
    if res[1] == password:
        token = crypto.getToken()
        db.upToken(token, username)
        return Response({'response':'{}'.format(token)})
    else:
        return Response({'response':'false'})

@api_view(['GET'])
def newUser(request, username, password, role='user'):
    con = sql.connect('../db/db.db')
    cur = con.cursor()
    cur.execute(
        "INSERT INTO users VALUES('{}','{}','{}')".format(username, password, role)
    )
    con.commit()
    return Response({'response':'ok'})
