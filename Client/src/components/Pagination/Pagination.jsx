import { useSelector, useDispatch } from "react-redux";
import { createSearchParams } from "react-router-dom";
import { getAllCharacters } from "../../redux/actions";

const Pagination = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerPreviewPage = () => {
    if (state.allCharacters.prevPage === null) return;
    let querys = state.allCharacters.params;
    querys.page = state.allCharacters.prevPage;
    dispatch(getAllCharacters(`?${createSearchParams(querys)}`));
    window.localStorage.setItem("querys", JSON.stringify(querys))
    
  };

  const handlerNextPage = () => {
    if (state.allCharacters.nextPage === null) return;
    let querys = state.allCharacters.params;
    querys.page = state.allCharacters.nextPage;
    console.log(querys);
    dispatch(getAllCharacters(`?${createSearchParams(querys)}`));
    window.localStorage.setItem("querys", JSON.stringify(querys))
    
  };
  
  const handlerPrimero = () =>{
    if (state.allCharacters.prevPage === null) return;
    let querys = state.allCharacters.params;
    querys.page = 0
    dispatch(getAllCharacters(`?${createSearchParams(querys)}`));
  
  }

  
  const handlerUltimo = () =>{
    if (state.allCharacters.nextPage === null) return;
    let querys = state.allCharacters.params;
    querys.page = state.allCharacters.totalPage
    dispatch(getAllCharacters(`?${createSearchParams(querys)}`));
  
  }

  return (
    <div className="flex items-center justify-center  pb-12"  style={{ marginTop: "2rem" }}>
      <div className="flex justify-center items-center space-x-4">
      <div
          onClick={handlerPrimero}
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          primero
        </div>
        <div
          onClick={handlerPreviewPage}
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          PREV
        </div>
        <div className="text-slate-500">
          {state.allCharacters.currentPage + 1} /{" "}
          {state.allCharacters.totalPage + 1}{" "}
        </div>
        <div
          onClick={handlerNextPage}
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          NEXT
        </div>
        <div
          onClick={handlerUltimo}
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
        >
          Ultimo
        </div>
      </div>
    </div>
  );
};

export default Pagination;
