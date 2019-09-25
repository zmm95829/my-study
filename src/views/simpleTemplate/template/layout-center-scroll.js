export default `<!DOCTYPE html>
<html>
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      html,
      body,
      #all {
        height: 100%;
      }
      #top {
        height: 40px;
        border-bottom: 1px solid skyblue;
        position: fixed;
        width: 100%;
        top: 0;
      }
      #footer {
        height: 40px;
        border-top: 1px solid skyblue;
        position: fixed;
        width: 100%;
        bottom: 0;
      }
      #main {
        background-color: white;
        height: calc(100% - 80px);
        padding: 40px 0;
      }
      #left,
      #center,
      #right {
        float: left;
      }
      #left,
      #right {
        width: 120px;
      }
      #right {
        float: right;
      }
      #center {
        width: calc(100% - 260px);
        height: 100%;
        overflow: auto;
        padding: 8px;
        box-sizing: border-box;
        border-left: 1px solid red;
        border-right: 1px solid red;
      }
      .show-hidden-left, .show-hidden-right {
        width: 10px;
        height: 100%;
        line-height: 100%;
        background-color: #ecebeb;
        cursor: pointer;
        border-radius: 6px;
        opacity: 0.5;
        position: relative;
      }
      .show-hidden-left {
        float: left;
      }
      .show-hidden-left:hover, .show-hidden-right:hover {
        opacity: 1;
      }
      .show-hidden-left span {
        margin-left: -6px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
      }
      .show-hidden-left span:nth-child(2) {
        margin-left: 0;
        display: none;
      }
      .show-hidden-right {
        float: right;
      }
      .show-hidden-right span {
        margin-left: 0;
        position: absolute;
        top: 50%;
        margin-top: -10px;
      }
      .show-hidden-right span:nth-child(2) {
        margin-left: -6px;
        display: none;
      }
    </style>
    <script>
      function hiddenLeft(_this) {
        hiddenOrShow("left", "right", _this);
      }

      function hiddenRight(_this) {
        hiddenOrShow("right", "left", _this);
      }
      function hiddenOrShow(operateType, otherType, _this) {
        const operate = document.getElementById(operateType);
        const other = document.getElementById(otherType);
        const center = document.getElementById("center");
        const width = 20 + (operate.style.display === "none" ? 120 : 0) + (other.style.display === "none" ? 0 : 120) ;
        if (_this.firstChild.style.display !== "none") {
          operate.style.display = "none";
          center.style.width = \`calc(100% - \${width}px)\`;
          _this.firstChild.style.display = "none";
          _this.lastChild.style.display = "block";
        } else {
          operate.style.display = "block";
          center.style.width = \`calc(100% - \${width}px)\`;
          _this.firstChild.style.display = "block";
          _this.lastChild.style.display = "none";
        }
      }
    </script>
  </head>
  <body>
      <div id="all">
        <div id="top">top</div>
        <div id="main">
          <div id="left">left
          </div>
          <div class="show-hidden-left" title="隐藏/展开" onclick="hiddenLeft(this)"><span>《</span><span>》</span></div>
          <div id="center">center
          </div>
          <div id="right">right</div>
          <div class="show-hidden-right" title="隐藏/展开" onclick="hiddenRight(this)"><span>》</span><span>《</span></div>
        </div>
        <div id="footer">footer</div>
      </div>
  </body>
</html>`;
