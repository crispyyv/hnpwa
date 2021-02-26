import React, { useEffect, useMemo, useRef, useState } from "react";
import { field } from "src/constants";
import useOnScreen from "src/hooks/useOnScreen";
import { getKey, getTableInfo } from "src/libs/fetcher";
import { useSWRInfinite } from "swr";
import {
  Thead,
  StyledTable,
  Row,
  Truncated,
  FloatedButton,
  MobileTd,
} from "./styled/table";

export interface TableProps {
  type: string;
}

export const Table = ({ type }: TableProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const { data, error, size, setSize } = useSWRInfinite(
    (pageIndex, previousPageData) => getKey(type, pageIndex, previousPageData),
    getTableInfo
  );
  const [sortConfig, setSortConfig] = useState<{
    type: string;
    changeDirection: boolean;
  }>({
    type: "",
    changeDirection: false,
  });

  const isLoadingInitialData = !data && !error;
  const renderedData = useMemo(() => {
    if (!data) return [];
    if (sortConfig.type.length < 1) {
      return data.flat();
    } else {
      const sortable = [...data].flat();
      return sortable.sort((a, b) =>
        a[sortConfig.type] < b[sortConfig.type]
          ? sortConfig.changeDirection
            ? -1
            : 1
          : sortConfig.changeDirection
          ? 1
          : -1
      );
    }
  }, [data, sortConfig]);

  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  const isReachingEnd = data && data[data.length - 1].length === 0;

  useEffect(() => {
    if (isVisible && !isReachingEnd) {
      setSize(size + 1);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <>
      {renderedData && (
        <StyledTable>
          <Thead>
            <Row>
              {field.map((el, idx) => (
                <th
                  className={`${el === "title" ? "mobile" : ""}`}
                  onClick={() =>
                    setSortConfig({
                      type: el,
                      changeDirection: !sortConfig.changeDirection,
                    })
                  }
                  key={idx}
                >
                  {el[0].toUpperCase() + el.substring(1)}
                  {sortConfig.type === el
                    ? sortConfig.changeDirection
                      ? " ↓"
                      : " ↑"
                    : null}
                </th>
              ))}
            </Row>
          </Thead>
          <tbody>
            {renderedData.map((el, idx) => (
              <Row key={idx}>
                <MobileTd>
                  <Truncated>{el.title || "no info"}</Truncated>
                </MobileTd>
                <td>{el.domain || "no info"}</td>
                <td>{new Date(el.time * 1000).toLocaleString() || "-"}</td>
              </Row>
            ))}
          </tbody>
        </StyledTable>
      )}
      <FloatedButton
        onClick={() =>
          setSortConfig({
            type: "time",
            changeDirection: !sortConfig.changeDirection,
          })
        }
      >
        Sort
      </FloatedButton>
      <div ref={ref}>
        {isLoadingMore ? "loading..." : isReachingEnd ? "No more" : ""}
      </div>
    </>
  );
};
