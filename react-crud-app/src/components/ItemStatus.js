import React, { useEffect } from "react";
import "./ItemStatus.css";

export default function ItemStatus({
  bannerEditStatus,
  setBannerEditStatus,
  bannerCreateState,
  setBannerCreateState,
  bannerRemoveStatus,
  setBannerRemoveStatus,
}) {
  useEffect(() => {
    if (bannerEditStatus) {
      setTimeout(() => {
        setBannerEditStatus((prev) => !prev);
      }, 800);
    }
    if (bannerCreateState) {
      setTimeout(() => {
        setBannerCreateState((prev) => !prev);
      }, 800);
    }
    if (bannerRemoveStatus) {
      setTimeout(() => {
        setBannerRemoveStatus((prev) => !prev);
      }, 800);
    }
  }, [bannerCreateState, bannerEditStatus, bannerRemoveStatus]);

  return (
    <div className="item-status-container">
      {bannerCreateState && (
        <div className="item-status-container--create">
          아이템이 생성되었습니다.
        </div>
      )}
      {bannerEditStatus && (
        <div className="item-status-container--edit">
          아이템이 수정되었습니다.
        </div>
      )}
      {bannerRemoveStatus && (
        <div className="item-status-container--delete">
          아이템이 삭제되었습니다.
        </div>
      )}
    </div>
  );
}
