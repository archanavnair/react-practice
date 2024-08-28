import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if the current user is online and return online status

  useEffect(() => {
    //need to keep checking if the user is online
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  ///return boolean
  return onlineStatus;
};

export default useOnlineStatus;
