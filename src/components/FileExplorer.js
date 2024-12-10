import { useContext, useState } from "react";
import { FileExplorerContext } from "../context/FileExplorerContext";
import InputBox from "./InputBox";

const FileExplorer = ({ id = 1 }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showAddInput, setShowAddInput] = useState(false);
  const [showEditInput, setShowEditInput] = useState(false);
  const { nodes, deleteNode, addNode, editNode } =
    useContext(FileExplorerContext);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  const handleAddNode = () => {
    setShowAddInput(true);
  };

  return (
    <div className="container">
      <h5>
        {nodes[id]?.type === "folder" ? (
          showChildren ? (
            <i className="fa-solid fa-chevron-down" onClick={handleClick}></i>
          ) : (
            <i className="fa-solid fa-chevron-right" onClick={handleClick}></i>
          )
        ) : (
          "📄"
        )}

        {showEditInput ? (
          <InputBox
            name={nodes[id]?.name}
            id={id}
            submit={editNode}
            cancel={() => setShowEditInput(false)}
          />
        ) : (
          <>
            <span>{nodes[id]?.name}</span>
            {nodes[id]?.type === "folder" && (
              <button className="action-btn" onClick={() => handleAddNode()}>
                <i className="fa-solid fa-plus"></i>
              </button>
            )}
            <button
              className="action-btn"
              onClick={() => setShowEditInput(true)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            {nodes[id]?.parentId !== null && (
              <button className="action-btn" onClick={() => deleteNode(id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            )}
          </>
        )}
      </h5>

      {showAddInput && (
        <InputBox
          id={id}
          submit={addNode}
          cancel={() => setShowAddInput(false)}
        />
      )}

      {showChildren &&
        nodes[id]?.children?.map((childId, index) => {
          return <FileExplorer key={index} id={childId} />;
        })}
    </div>
  );
};

export default FileExplorer;
