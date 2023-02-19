const importScript=url=>{
  const tag=document.createElement("script");
  tag.src=url;
  return new Promise(resolve=>{
    tag.onload=e=>{
      resolve(e)
    }
    document.head.append(tag);
  });
};
(async()=>{
  await importScript("https://unpkg.com/twemoji@latest/dist/twemoji.min.js");
  twemoji.parse(document.body);
});
