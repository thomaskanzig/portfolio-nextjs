'use client';

import { useEffect, useCallback } from 'react';

const useWindowScrollListener = (
    reachedBottomOfPageHandler: (() => void) | null,
    notTopOfPageHandler: (() => void) | null,
    topOfPageHandler: (() => void) | null
): void => {
    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            if (reachedBottomOfPageHandler) {
                reachedBottomOfPageHandler();
            }
            return;
        }

        if (scrollTop > 0) {
            if (notTopOfPageHandler) {
                notTopOfPageHandler();
            }
            return;
        }

        if (topOfPageHandler) {
            topOfPageHandler();
        }
    }, [reachedBottomOfPageHandler, notTopOfPageHandler, topOfPageHandler]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
};

export default useWindowScrollListener;