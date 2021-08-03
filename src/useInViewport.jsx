import React, { useCallback, useEffect, useRef, useState } from 'react';
import useInViewport from 'react-use-lib/es/useInViewport';
import { Spin } from 'antd';
import './useInViewport.less';

const isTouchDevice = typeof window !== 'undefined' && window.ontouchstart !== undefined;

// 实现移动端上拉加载
const pageSize = 10;

export default function useInViewportApp() {
  const [isLoading, setLoading] = useState(false);
  const ref = useRef();
  const [data, setData] = useState([]);
  const isBottomReached = useInViewport(ref);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const setPageHandler = useCallback(() => {
    if (!isLoading && isBottomReached && hasMore) {
      setPage((p) => p + 1);
    }
  }, [isLoading, isBottomReached, hasMore]);

  useEffect(() => {
    document.addEventListener(isTouchDevice ? 'touchstart' : 'click', setPageHandler, true);

    return () => {
      document.removeEventListener(isTouchDevice ? 'touchstart' : 'click', setPageHandler, true);
    };
  }, [setPageHandler]);

  useEffect(() => {
    setPageHandler();
  }, [setPageHandler]);

  useEffect(() => {
    console.log(page);
    const fetchData = () => {
      setLoading(true);
      return new Promise((resolve) => {
        var ar = [];
        for (var i = 0; i < pageSize; i++) {
          ar.push((page - 1) * pageSize + i + 1);
        }
        setTimeout(() => {
          setData((d) => d.concat(ar));
          setHasMore(page < 4);
          resolve();
        }, 1000);
      }).then(() => {
        setLoading(false);
      });
    };
    fetchData();
  }, [page]);

  return (
    <div className="pull-wrapper">
      <div className="pull-content">
        {data.map((item, idx) => (
          <div key={idx} className="item" data-item={item}>
            list {item}
          </div>
        ))}
        <div className="loading-tip" ref={ref}>
          {isLoading ? <Spin /> : !hasMore ? <span>到底了</span> : null}
        </div>
      </div>
    </div>
  );
}
