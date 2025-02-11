(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_97109d._.js", {

"[project]/src/components/Scene.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Scene)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Scene({ name, duration, onDelete, onAdd, onNameChange, onDurationChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border p-4 m-2 flex items-center justify-between bg-white shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: name,
                onChange: (e)=>onNameChange?.(e.target.value),
                className: "border p-2 w-32"
            }, void 0, false, {
                fileName: "[project]/src/components/Scene.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: duration,
                onChange: (e)=>onDurationChange?.(parseInt(e.target.value) || 0),
                className: "border p-2 w-20"
            }, void 0, false, {
                fileName: "[project]/src/components/Scene.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-x-2",
                children: [
                    onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-red-500 text-white px-3 py-1 rounded",
                        onClick: onDelete,
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Scene.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    onAdd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-green-500 text-white px-3 py-1 rounded",
                        onClick: onAdd,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Scene.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Scene.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Scene.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Scene;
var _c;
__turbopack_refresh__.register(_c, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Transition.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Transition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Transition({ from, to, duration, onDurationChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border p-4 m-2 text-gray-500 flex justify-between items-center bg-white shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Transition: ",
                    from,
                    " → ",
                    to
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Transition.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: duration,
                onChange: (e)=>onDurationChange?.(parseInt(e.target.value) || 0),
                className: "border p-2 w-20"
            }, void 0, false, {
                fileName: "[project]/src/components/Transition.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Transition.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Transition;
var _c;
__turbopack_refresh__.register(_c, "Transition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/DurationStats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DurationStats)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function DurationStats({ totalScenes, totalTransitions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 mt-4 rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold",
                children: [
                    "Durée totale du show : ",
                    totalScenes + totalTransitions,
                    " sec"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DurationStats.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: [
                    "Durée des scènes : ",
                    totalScenes,
                    " sec"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DurationStats.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: [
                    "Durée des transitions : ",
                    totalTransitions,
                    " sec"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DurationStats.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DurationStats.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = DurationStats;
var _c;
__turbopack_refresh__.register(_c, "DurationStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Controls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Controls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Controls({ onReset, onLoad, onSave }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 flex gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-red-500 text-white px-4 py-2 rounded",
                onClick: onReset,
                children: "Reset"
            }, void 0, false, {
                fileName: "[project]/src/components/Controls.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-blue-500 text-white px-4 py-2 rounded",
                onClick: onLoad,
                children: "Load"
            }, void 0, false, {
                fileName: "[project]/src/components/Controls.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-green-500 text-white px-4 py-2 rounded",
                onClick: onSave,
                children: "Save"
            }, void 0, false, {
                fileName: "[project]/src/components/Controls.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Controls.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Controls;
var _c;
__turbopack_refresh__.register(_c, "Controls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ShowTable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ShowTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Scene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Transition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Transition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DurationStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/DurationStats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function ShowTable() {
    _s();
    const [scenes, setScenes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: "Scene 1",
            duration: 30
        }
    ]);
    const [transitions, setTransitions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowTable.useEffect": ()=>{
            const savedScenes = localStorage.getItem("scenes");
            const savedTransitions = localStorage.getItem("transitions");
            if (savedScenes && savedTransitions) {
                setScenes(JSON.parse(savedScenes));
                setTransitions(JSON.parse(savedTransitions));
            }
        }
    }["ShowTable.useEffect"], []);
    const addScene = (index)=>{
        const newScene = {
            id: Date.now(),
            name: `Scene ${scenes.length + 1}`,
            duration: 30
        };
        const newScenes = [
            ...scenes
        ];
        newScenes.splice(index + 1, 0, newScene);
        const newTransitions = [
            ...transitions
        ];
        newTransitions.splice(index, 0, {
            id: Date.now(),
            from: scenes[index].name,
            to: newScene.name,
            duration: 10
        });
        setScenes(newScenes);
        setTransitions(newTransitions);
    };
    const deleteScene = (id)=>{
        const sceneIndex = scenes.findIndex((scene)=>scene.id === id);
        if (sceneIndex === -1) return;
        const newScenes = scenes.filter((scene)=>scene.id !== id);
        let newTransitions = [
            ...transitions
        ];
        if (sceneIndex > 0 && sceneIndex < transitions.length) {
            newTransitions[sceneIndex - 1] = {
                ...newTransitions[sceneIndex - 1],
                to: newScenes[sceneIndex]?.name || ""
            };
        }
        newTransitions = newTransitions.filter((_, index)=>index !== sceneIndex && index !== sceneIndex - 1);
        setScenes(newScenes);
        setTransitions(newTransitions);
    };
    const updateSceneName = (id, newName)=>{
        const updatedScenes = scenes.map((scene)=>scene.id === id ? {
                ...scene,
                name: newName
            } : scene);
        setScenes(updatedScenes);
    };
    const updateSceneDuration = (id, newDuration)=>{
        setScenes(scenes.map((scene)=>scene.id === id ? {
                ...scene,
                duration: newDuration
            } : scene));
    };
    const updateTransitionDuration = (id, newDuration)=>{
        setTransitions(transitions.map((transition)=>transition.id === id ? {
                ...transition,
                duration: newDuration
            } : transition));
    };
    const saveToLocalStorage = ()=>{
        localStorage.setItem("scenes", JSON.stringify(scenes));
        localStorage.setItem("transitions", JSON.stringify(transitions));
    };
    const loadExampleData = ()=>{
        const savedScenes = localStorage.getItem("scenes");
        const savedTransitions = localStorage.getItem("transitions");
        if (savedScenes && savedTransitions) {
            setScenes(JSON.parse(savedScenes));
            setTransitions(JSON.parse(savedTransitions));
        } else {
            setScenes([
                {
                    id: 1,
                    name: "Torche",
                    duration: 30
                },
                {
                    id: 2,
                    name: "Phoenix",
                    duration: 45
                },
                {
                    id: 3,
                    name: "Logo",
                    duration: 60
                }
            ]);
            setTransitions([
                {
                    id: 1,
                    from: "Torche",
                    to: "Phoenix",
                    duration: 12
                },
                {
                    id: 2,
                    from: "Phoenix",
                    to: "Logo",
                    duration: 19
                }
            ]);
        }
    };
    const resetTable = ()=>{
        setScenes([
            {
                id: 1,
                name: "Scene 1",
                duration: 30
            }
        ]);
        setTransitions([]);
    };
    const totalScenesDuration = scenes.reduce((total, scene)=>total + scene.duration, 0);
    const totalTransitionsDuration = transitions.reduce((total, transition)=>total + transition.duration, 0);
    // Fonction pour gérer le déplacement d'une scène
    const onDragEnd = (result)=>{
        if (!result.destination) return;
        const newScenes = [
            ...scenes
        ];
        const [movedScene] = newScenes.splice(result.source.index, 1);
        newScenes.splice(result.destination.index, 0, movedScene);
        setScenes(newScenes);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 p-6 rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropContext"], {
                onDragEnd: onDragEnd,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
                    droppableId: "scenes",
                    children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ...provided.droppableProps,
                            ref: provided.innerRef,
                            children: [
                                scenes.map((scene, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
                                        draggableId: scene.id.toString(),
                                        index: index,
                                        children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: provided.innerRef,
                                                ...provided.draggableProps,
                                                ...provided.dragHandleProps,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Scene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        name: scene.name,
                                                        duration: scene.duration,
                                                        onDelete: scenes.length > 1 ? ()=>deleteScene(scene.id) : undefined,
                                                        onAdd: ()=>addScene(index),
                                                        onNameChange: (newName)=>updateSceneName(scene.id, newName),
                                                        onDurationChange: (newDuration)=>updateSceneDuration(scene.id, newDuration)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ShowTable.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    index < scenes.length - 1 && transitions[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Transition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        id: transitions[index].id,
                                                        from: transitions[index].from,
                                                        to: transitions[index].to,
                                                        duration: transitions[index].duration,
                                                        onDurationChange: (newDuration)=>updateTransitionDuration(transitions[index].id, newDuration)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ShowTable.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ShowTable.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                    }, scene.id, false, {
                                        fileName: "[project]/src/components/ShowTable.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)),
                                provided.placeholder
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ShowTable.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ShowTable.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ShowTable.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DurationStats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                totalScenes: totalScenesDuration,
                totalTransitions: totalTransitionsDuration
            }, void 0, false, {
                fileName: "[project]/src/components/ShowTable.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onReset: resetTable,
                onLoad: loadExampleData,
                onSave: saveToLocalStorage
            }, void 0, false, {
                fileName: "[project]/src/components/ShowTable.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ShowTable.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(ShowTable, "yPERPCgB1BFAh2EzWUssDzkAtJE=");
_c = ShowTable;
var _c;
__turbopack_refresh__.register(_c, "ShowTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_97109d._.js.map