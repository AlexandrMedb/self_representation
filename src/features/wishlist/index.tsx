import React, { useEffect, useMemo } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store/store";

import { wishListFetch, wishListPost } from "./wishListSlice";

type props = ConnectedProps<typeof connector>;

const mapStateToProps = ({ wishList }: RootState) => {
  const { loading, error, data } = wishList;
  return { loading, error, data };
};
const dispatchToProps = { wishListFetch, wishListPost };

const connector = connect(mapStateToProps, dispatchToProps);

export const Wishlist = connector((props: props) => {
  const { wishListFetch, error, loading, data, wishListPost } = props;
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
      <div onClick={clickHandler}>
        {data.map((el) => (
          <div key={el.id}>{el.title}</div>
        ))}
      </div>
    );
  }, [data]);

  if (loading) return <div>....loading</div>;
  if (error) return <div>{error}</div>;
  return list;
});
