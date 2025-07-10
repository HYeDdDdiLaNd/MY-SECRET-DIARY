import { useEffect } from 'react';

export const setPageTitle = (titleText) => {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0];
    $title.innerText = titleText;
  }, [titleText]);
};
