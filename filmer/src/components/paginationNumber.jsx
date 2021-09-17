import React, { useEffect, useRef, useState } from "react";
import styled from "./paginationNumber.module.css"

export default function PageNationControls(props) {
  const [paginas, setPaginas] = useState(undefined);
  const [actualpage, setActualPage] = useState(1);
  let PageRef = useRef()
  PageRef = props.page

  useEffect(() => {
    setPaginas(props.TotalPage);
  }, [props.TotalPage]);

  useEffect(() => {

    PageRef(actualpage)

  }, [actualpage]);

  return !paginas ? (
    ""
  ) : (
    <div className={styled.paginate}>
      <div className={styled.controls}>
        <button
          className={styled.first}
          onClick={() => {
            setActualPage(1);
          }}
        >
          &#171;
        </button>

        <button
          className={styled.prev}
          onClick={() => {
            actualpage <= 1
              ? setActualPage(1)
              : setActualPage((actualpage) => actualpage - 1);
          }}
        >
          {"<"}
        </button>

        <div className={styled.numbers}>
          <div>
            {actualpage} ate {paginas}
          </div>
        </div>

        <button
          type="button"
          className={styled.next}
          onClick={() => {
            actualpage >= paginas
              ? setActualPage(paginas)
              : setActualPage(actualpage + 1);
          }}
        >
          {">"}
        </button>

        <button
          className={styled.last}
          onClick={() => {
            setActualPage(paginas);
          }}
        >
          &#187;
        </button>
      </div>
    </div>
  );
}
