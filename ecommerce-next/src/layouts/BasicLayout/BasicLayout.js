import { Container } from "semantic-ui-react";
import styles from "./BasicLayout.module.scss";

export function BasicLayout(props) {
  const { 
    children,
    isOpenSearch =  false, 
    isContainer = false,
    relative = false, 
  } = props;
  return (
    <>
      {/* {Todo: ToBar} */}

      <Container fluid>
        {isContainer ? <Container>{children}</Container> : children}
        </Container>

      {/* {Todo: Footer} */}

    </>
  );
}
