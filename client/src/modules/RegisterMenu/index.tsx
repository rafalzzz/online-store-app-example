import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleRegisterMenu } from "./../../store/registerMenu/actions";
import { registerMenuIsOpenRX } from "../../store/registerMenu/selectors";
import { RegisterMenuLayout } from "./layout";

export const RegisterMenu = () => {
  /* const [ChangeLayout, setChangeLayout] = useState(false); */

  /* useEffect(() => {
    if (window.innerWidth < 1000) {
      setChangeLayout(true);
    } else setChangeLayout(false);
  }, [window.innerWidth]); */

  const dispatch = useDispatch();
  const registerMenuIsOpen = useSelector(registerMenuIsOpenRX);

  const handleCloseRegisterMenu = useCallback((e: React.MouseEvent) => {
    dispatch(toggleRegisterMenu());
  }, []);

  return (
    <RegisterMenuLayout
      isOpen={registerMenuIsOpen}
      handleCloseRegisterMenu={handleCloseRegisterMenu}
    />
  );
};
