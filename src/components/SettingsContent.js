import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "../css/WrapperClasses.css";
import "../css/SettingsContent.css";
import "../css/TextClasses.css";
import ToggleButton from "./ToggleButton";
import PreferenceText from "./PreferenceText";
import Divider from "./Divider";
const SettingsContent = (props) => {
  let preferences = props.currentUser.work_preference;

  if (props.selectedUser.displayCard === "show") {
    if (props.user) {
      preferences = props.user.work_preference;
    }
  }
  return (
    <div className={"width-fill-100-percent "}>
      <ul className={"preferences-wrap"}>
        <li className={"preference-item-wrap"}>
          <ToggleButton
            prefTitle={"open_to_work"}
            selected={preferences.open_to_work}
          />
          <p>Open To Work</p>
        </li>
      </ul>
      <Divider />
      {preferences.open_to_work ? (
        <ul className={"preferences-wrap"}>
          <li className={"preference-item-wrap"}>
            <ToggleButton
              prefTitle={"open_to_remote_work"}
              selected={preferences.open_to_remote_work}
            />
            <p>Open To Remote Work</p>
          </li>
          <li className={"preference-item-wrap"}>
            <ToggleButton
              prefTitle={"open_to_local_work"}
              selected={preferences.open_to_local_work}
            />
            <p>Open To Local Work</p>
          </li>
          <li className={"preference-item-wrap"}>
            <ToggleButton
              prefTitle={"willing_to_relocate"}
              selected={preferences.willing_to_relocate}
            />
            <p>Willing to Relocate</p>
          </li>
          <li className={"preference-item-wrap"}>
            <PreferenceText
              prefTitle={"current_zip_code"}
              content={preferences.current_zip_code}
              placeholder={"111223"}
              inputStyle={"text-align-center"}
            />
            <p>Current Zip Code</p>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    selectedUser: state.adminAccessUsers.selectedUser,
  };
};

export default connect(mapStateToProps)(SettingsContent);
