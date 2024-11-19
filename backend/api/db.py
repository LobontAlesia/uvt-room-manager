import sqlite3 as sql

def upToken(token, username):
    con = sql.connect('../db/db.db')
    cur = con.cursor()
    cur.execute("INSERT INTO tokens VALUES('{}', '{}')".format(token, username))
    con.commit()
