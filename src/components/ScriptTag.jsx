const ScriptTag = () => {
  let privacyPolicy = (function (w, d) {
    var loader = function () {
      var s = d.createElement("script"),
        tag = d.getElementsByTagName("script")[0];
      s.src = "https://cdn.iubenda.com/iubenda.js";
      tag.parentNode.insertBefore(s, tag);
    };
    if (w.addEventListener) {
      w.addEventListener("load", loader, false);
    } else if (w.attachEvent) {
      w.attachEvent("onload", loader);
    } else {
      w.onload = loader;
    }
  })(window, document);

  let cookiePolicy = (function (w, d) {
    var loader = function () {
      var s = d.createElement("script"),
        tag = d.getElementsByTagName("script")[0];
      s.src = "https://cdn.iubenda.com/iubenda.js";
      tag.parentNode.insertBefore(s, tag);
    };
    if (w.addEventListener) {
      w.addEventListener("load", loader, false);
    } else if (w.attachEvent) {
      w.attachEvent("onload", loader);
    } else {
      w.onload = loader;
    }
  })(window, document);

  return (
    <div className="mt-4 flex gap-4">
      <a
        href="https://www.iubenda.com/privacy-policy/12049928"
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
        title="Privacy Policy "
      >
        Privacy Policy
      </a>
      <script type="text/javascript">{privacyPolicy}</script>
      <a
        href="https://www.iubenda.com/privacy-policy/12049928/cookie-policy"
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe "
        title="Cookie Policy "
      >
        Cookie Policy
      </a>
      <script type="text/javascript">{cookiePolicy}</script>
    </div>
  );
};
export default ScriptTag;
