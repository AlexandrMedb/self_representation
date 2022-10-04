import React, { useEffect, useMemo } from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../store/store";

import {
  wishListDelete,
  wishListFetch,
  wishListPatch,
  wishListPost,
} from "./wishListSlice";

type props = ConnectedProps<typeof connector>;

const mapStateToProps = ({ wishList }: RootState) => {
  const { loading, error, data } = wishList;
  return { loading, error, data };
};
const dispatchToProps = {
  wishListFetch,
  wishListPost,
  wishListDelete,
  wishListPatch,
};

const connector = connect(mapStateToProps, dispatchToProps);

export const Wishlist = connector((props: props) => {
  const {
    wishListFetch,
    error,
    loading,
    data,
    wishListPost,
    wishListDelete,
    wishListPatch,
  } = props;
  useEffect(() => {
    wishListFetch();
  }, []);

  const addHandler = () => {
    wishListPost({
      title: new Date().toLocaleTimeString("ru", {
        second: "numeric",
        minute: "2-digit",
      }),
      author: "autor",
    });
  };

  const patchHandler = (id: number | string) => {
    wishListPatch({
      id,
      wish: {
        title: new Date().toLocaleTimeString("ru", {
          second: "numeric",
          minute: "2-digit",
        }),
        author: "autor",
      },
    });
  };

  const list = useMemo(() => {
    return (
      <div>
        <div onClick={addHandler}>add</div>
        {data.map((el) => (
          <div key={el.id} onClick={() => patchHandler(el.id)}>
            {el.title}
            <p>--- </p>
            <p onClick={() => wishListDelete(el.id)}>delete</p>
            <p>** </p>
          </div>
        ))}
      </div>
    );
  }, [data]);

  if (loading) return <div>....loading</div>;
  if (error) return <div>{error}</div>;
  return list;
});
