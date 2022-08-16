import React from "react";
import Tittle from "./components/tittle/tittle"
import Filter from "./components/filter/filter"
function app() {
  return (
    <main>
      <div className="container d-flex justify-content-center">
        <Tittle />
        <Filter />
      </div>
    </main>
  )
}

export default app