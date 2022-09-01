const setTheme = theme => {
  console.log(theme);
  //console.log(document.styleSheets);

  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (prevStyleSheet, currStyleSheet) =>
      (prevStyleSheet = [
        ...prevStyleSheet,
        ...Array.from(currStyleSheet.cssRules).reduce(
          (prevCssRule, currCssRule) => {
            // console.log(prevCssRule, currCssRule);
            prevCssRule =
              currCssRule.selectorText === ":root"
                ? [
                    ...prevCssRule,
                    ...Array.from(currCssRule.style).filter(item =>
                      item.startsWith("--selected")
                    )
                  ]
                : prevCssRule;
            return prevCssRule;
          },
          []
        )
      ]),
    []
  );
  selectedCssProps.forEach(value => {
    document.documentElement.style.setProperty(
      value,
      `var(--${theme}${value.substring(10)})`
    );
  });
  console.log(selectedCssProps);
};
export default setTheme;
