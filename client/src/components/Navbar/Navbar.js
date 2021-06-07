import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import from

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <div className="AsanaPageTopbar AsanaPageTopbar--withoutShadow">
            <div className="">
                <div className="ExpandSidebarButton--shouldHide ExpandSidebarButton">
                    <div
                        className="AbstractThemeableIconButton--isEnabled AbstractThemeableIconButton AbstractThemeableIconButton--large SubtleIconButton"
                        role="button" aria-label="Expand sidebar" tabIndex="0">
                        <svg className="Icon ThinBurgerIcon" focusable="false" viewBox="0 0 32 32">
                            <path
                                d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="AsanaPageTopbar-pageHeader">
                <div className="TopbarPageHeaderStructure">
                    <div className="TopbarPageHeaderStructure-titleAndNav">
                        <div
                            className="TopbarPageHeaderStructure-titleRow--withoutNav TopbarPageHeaderStructure-titleRow">
                            <h1 className="Typography--truncate TopbarPageHeaderStructure-title Typography Typography--colorDarkGray2 Typography--h4 Typography--fontWeightMedium">Home</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="TopbarPageHeaderGlobalActions AsanaPageTopbar-globalActions">
                <div
                    className="AbstractThemeableIconButton--isEnabled AbstractThemeableIconButton AbstractThemeableIconButton--medium OmnibuttonCorangeIconButton Omnibutton TopbarPageHeaderGlobalActions-omnibuttonWithoutQuestionMenu"
                    role="button" aria-label="Create new" aria-expanded="false" tabIndex="0">
                    <svg className="Icon PlusIcon" focusable="false" viewBox="0 0 32 32">
                        <path
                            d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"/>
                    </svg>
                </div>
                {/*<a className="TopbarPageHeaderGlobalActions-settingsMenuButton DeprecatedAnchor" aria-controls="lui_6"*/}
                {/*   aria-expanded="false" aria-popup="true" id="lui_5">*/}
                {/*    <div*/}
                {/*        className="TopbarPageHeaderGlobalActions-settingsMenuAvatar Avatar AvatarPhoto AvatarPhoto--small AvatarPhoto--color0"*/}
                {/*        role="img"*/}
                {/*        style="background-image: url(&quot;https://s3.amazonaws.com/profile_photos/1200316027163937.iUGcelP8FhZCLbhoWZUR_27x27.png&quot;);"*/}
                {/*    />*/}
                {/*</a>*/}
            </div>
        </div>
    )
}