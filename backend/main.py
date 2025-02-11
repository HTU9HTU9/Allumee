from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Modèles de données
class Scene(BaseModel):
    id: int
    name: str
    duration: int

class Transition(BaseModel):
    id: int
    from_scene: str
    to_scene: str
    duration: int

class ShowData(BaseModel):
    scenes: List[Scene]
    transitions: List[Transition]

# Stockage en mémoire (remplace une base de données)
database = ShowData(
    scenes=[{"id": 1, "name": "Scene 1", "duration": 30}],
    transitions=[]
)

# 🔹 Endpoint pour récupérer les données
@app.get("/show", response_model=ShowData)
def get_show():
    return database

# 🔹 Endpoint pour sauvegarder les données
@app.post("/show")
def save_show(data: ShowData):
    global database
    database = data
    return {"message": "Données sauvegardées avec succès"}
