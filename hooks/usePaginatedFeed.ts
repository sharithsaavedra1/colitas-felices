import { useMemo, useState, useCallback } from 'react';
import { VideoItem } from '../types';

type UsePaginatedFeedArgs = {
  data: VideoItem[];
  pageSize?: number;
};

export function usePaginatedFeed({ data, pageSize = 4 }: UsePaginatedFeedArgs) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [loadingMore, setLoadingMore] = useState(false);

  const visible = useMemo(() => data.slice(0, visibleCount), [data, visibleCount]);

  const loadMore = useCallback(() => {
    if (loadingMore) return;
    if (visibleCount >= data.length) return;

    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((v) => Math.min(v + pageSize, data.length));
      setLoadingMore(false);
    }, 700);
  }, [data.length, loadingMore, pageSize, visibleCount]);

  return { visible, loadingMore, loadMore } as const;
}

export default usePaginatedFeed;
