import React from "react";

const EmptyState = () => {
  return (
    <>
      <img
        src="/empty-state.svg"
        alt="No projects"
        className="w-48 h-48 mb-4"
        draggable={false}
      />
      <h2 className="text-xl font-semibold text-gray-500 text-center">No projects found</h2>
      <p className="text-gray-400">Create a new project to get started</p>
    </>
  );
};

export default EmptyState;
