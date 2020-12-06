import React, { createRef, useLayoutEffect, useMemo } from 'react';

const Utterances = () => {
  const containerRef = createRef();

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'seosd97/blog-posts-md',
      'issue-term': 'pathname',
      label: 'post_comments',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
  }, []);

  return <div ref={containerRef} />;
};

export default Utterances;
