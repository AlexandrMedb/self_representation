import React, { useEffect, useMemo } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store/store";

import { wishListDelete, wishListFetch, wishListPost } from "./wishListSlice";

type props = ConnectedProps<typeof connector>;

const mapStateToProps = ({ wishList }: RootState) => {
  const { loading, error, data } = wishList;
  return { loading, error, data };
};
const dispatchToProps = { wishListFetch, wishListPost, wishListDelete };

const connector = connect(mapStateToProps, dispatchToProps);

export const Wishlist = connector((props: props) => {
  const { wishListFetch, error, loading, data, wishListPost, wishListDelete } =
    props;
  useEffect(() => {
    wishListFetch();
  }, []);

  const clickHandler = () => {
    wishListPost({
      title: new Date().toLocaleTimeString("ru", {
        second: "numeric",
        minute: "2-digit",
      }),
      author: "autor",
    });
  };

  const list = useMemo(() => {
    return (
      <div>
        <div onClick={clickHandler}>add</div>
        {data.map((el) => (
          <div key={el.id} onClick={() => wishListDelete(el.id)}>
            {el.title}
          </div>
        ))}
      </div>
    );
  }, [data]);

  if (loading) return <div>....loading</div>;
  if (error) return <div>{error}</div>;
  return list;
});
