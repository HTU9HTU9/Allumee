"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Scene from "./Scene";
import Transition from "./Transition";
import DurationStats from "./DurationStats";
import Controls from "./Controls";

export default function ShowTable() {
  const [scenes, setScenes] = useState([{ id: 1, name: "Scene 1", duration: 30 }]);
  const [transitions, setTransitions] = useState<{ id: number; from: string; to: string; duration: number }[]>([]);

  useEffect(() => {
    const savedScenes = localStorage.getItem("scenes");
    const savedTransitions = localStorage.getItem("transitions");
    if (savedScenes && savedTransitions) {
      setScenes(JSON.parse(savedScenes));
      setTransitions(JSON.parse(savedTransitions));
    }
  }, []);

  const addScene = (index: number) => {
    const newScene = { id: Date.now(), name: `Scene ${scenes.length + 1}`, duration: 30 };
    const newScenes = [...scenes];
    newScenes.splice(index + 1, 0, newScene);

    const newTransitions = [...transitions];
    newTransitions.splice(index, 0, {
      id: Date.now(),
      from: scenes[index].name,
      to: newScene.name,
      duration: 10,
    });

    setScenes(newScenes);
    setTransitions(newTransitions);
  };

  const deleteScene = (id: number) => {
    const sceneIndex = scenes.findIndex(scene => scene.id === id);
    if (sceneIndex === -1) return;

    const newScenes = scenes.filter(scene => scene.id !== id);
    let newTransitions = [...transitions];

    if (sceneIndex > 0 && sceneIndex < transitions.length) {
      newTransitions[sceneIndex - 1] = {
        ...newTransitions[sceneIndex - 1],
        to: newScenes[sceneIndex]?.name || "",
      };
    }

    newTransitions = newTransitions.filter((_, index) => index !== sceneIndex && index !== sceneIndex - 1);

    setScenes(newScenes);
    setTransitions(newTransitions);
  };

  const updateSceneName = (id: number, newName: string) => {
    const updatedScenes = scenes.map(scene => scene.id === id ? { ...scene, name: newName } : scene);
    setScenes(updatedScenes);
  };

  const updateSceneDuration = (id: number, newDuration: number) => {
    setScenes(scenes.map(scene => scene.id === id ? { ...scene, duration: newDuration } : scene));
  };

  const updateTransitionDuration = (id: number, newDuration: number) => {
    setTransitions(transitions.map(transition => transition.id === id ? { ...transition, duration: newDuration } : transition));
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("scenes", JSON.stringify(scenes));
    localStorage.setItem("transitions", JSON.stringify(transitions));
  };

  const loadExampleData = () => {
    const savedScenes = localStorage.getItem("scenes");
    const savedTransitions = localStorage.getItem("transitions");

    if (savedScenes && savedTransitions) {
      setScenes(JSON.parse(savedScenes));
      setTransitions(JSON.parse(savedTransitions));
    } else {
      setScenes([
        { id: 1, name: "Torche", duration: 30 },
        { id: 2, name: "Phoenix", duration: 45 },
        { id: 3, name: "Logo", duration: 60 },
      ]);
      setTransitions([
        { id: 1, from: "Torche", to: "Phoenix", duration: 12 },
        { id: 2, from: "Phoenix", to: "Logo", duration: 19 },
      ]);
    }
  };

  const resetTable = () => {
    setScenes([{ id: 1, name: "Scene 1", duration: 30 }]);
    setTransitions([]);
  };

  const totalScenesDuration = scenes.reduce((total, scene) => total + scene.duration, 0);
  const totalTransitionsDuration = transitions.reduce((total, transition) => total + transition.duration, 0);

  // Fonction pour gérer le déplacement d'une scène
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newScenes = [...scenes];
    const [movedScene] = newScenes.splice(result.source.index, 1);
    newScenes.splice(result.destination.index, 0, movedScene);
    
    setScenes(newScenes);
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="scenes">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {scenes.map((scene, index) => (
                <Draggable key={scene.id} draggableId={scene.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Scene
                        name={scene.name}
                        duration={scene.duration}
                        onDelete={scenes.length > 1 ? () => deleteScene(scene.id) : undefined}
                        onAdd={() => addScene(index)}
                        onNameChange={(newName) => updateSceneName(scene.id, newName)}
                        onDurationChange={(newDuration) => updateSceneDuration(scene.id, newDuration)}
                      />
                      {index < scenes.length - 1 && transitions[index] && (
                        <Transition
                          id={transitions[index].id}
                          from={transitions[index].from}
                          to={transitions[index].to}
                          duration={transitions[index].duration}
                          onDurationChange={(newDuration) => updateTransitionDuration(transitions[index].id, newDuration)}
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <DurationStats totalScenes={totalScenesDuration} totalTransitions={totalTransitionsDuration} />
      <Controls onReset={resetTable} onLoad={loadExampleData} onSave={saveToLocalStorage} />
    </div>
  );
}
