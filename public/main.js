console.log("我是main.js");
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log(request.response);
    // 创建 style 标签
    const style = document.createElement("style");
    // 写入 style 内容
    style.innerHTML = request.response;
    // 将 style 插入 head 中
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log(request.response);
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html"); // readyState = 1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // 下载完成 但不知道是 成功 2xx 还是 失败 4xx 或 5xx
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("HTML 加载失败");
      }
    }
  };
  request.send(); // readyState = 2
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml"); // readyState = 1
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      // 下载完成 但不知道是 成功 2xx 还是 失败 4xx 或 5xx
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("HTML 加载失败");
      }
    }
  };
  request.send(); // readyState = 2
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      }
    }
  };
  request.send();
};
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};
