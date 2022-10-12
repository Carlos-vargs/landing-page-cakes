const Button = {
  variants: {
    solid: (props) => ({
      paddingBlock: "18px",
      borderRadius: "3xl",
      width: "170px",
      height: "50px",
      color: "white",
      borderWidth: "2px",
      transition: "all 0.5s ease",
      fontFamily: "body",
    }),
    outline: (props) => ({
      paddingBlock: "18px",
      borderRadius: "3xl",
      width: "170px",
      height: "50px",
      color: "white",
      borderWidth: "2px",
      transition: "all 0.5s ease",
      fontFamily: "body",
      backgroundColor: "transparent",
      borderColor: "white",
      _hover: {
        backgroundColor: "white",
        color: "#585858",
      },
    }),
  },
};

export default Button;
