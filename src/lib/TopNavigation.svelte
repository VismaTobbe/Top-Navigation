<script lang="ts">
    import styles from "./TopNavigation.scss?inline";
    import ShadowDOM from "./ShadowDOM.svelte";
</script>

<template>
    <!-- <link rel="stylesheet" href="https://visma-unified-design.s3.eu-north-1.amazonaws.com/latest/dist/css/vud.light-dark.mode.min.css"> -->
    <ShadowDOM {styles}>
        <!-- <link rel="stylesheet" href="https://visma-unified-design.s3.eu-north-1.amazonaws.com/latest/dist/css/vud.light-dark.mode.min.css"> -->
        <header
            class="navbar navbar-default"
            id="nc4navTopMain"
            role="navigation"
        >
            <div class="navbar-header">
                <div class="navbar-brand dropdown">
                    <a
                        class="dropdown-toggle"
                        href={"#"}
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                        aria-label="Visma Project Name"
                    >
                        Visma Project Name
                        <span class="caret" />
                    </a>
                    <ul class="dropdown-menu" role="listbox">
                        <li>
                            <a
                                class="app-item"
                                href={"#"}
                                role="option"
                                aria-label="Autoinvoice"
                            >
                                <img src="..." alt="..." class="img-inline" />
                                Autoinvoice
                            </a>
                        </li>
                        ...
                    </ul>
                </div>
            </div>

            <nav class="collapse navbar-collapse" aria-label="Menu">
                <ul class="nav navbar-nav nav-tabs first-level" role="menubar">
                    <li>
                        <a
                            class="nav-item fl-menu-item"
                            href={"#"}
                            role="menuitem"
                            aria-selected="false">Item one</a
                        >
                    </li>
                    <li class="second-level-children active">
                        <a
                            class="nav-item fl-menu-item has-children"
                            href={"#"}
                            role="menuitem"
                            aria-selected="true">Item two</a
                        >
                        <ul class="second-level" role="menu">
                            <li class="dropdown">
                                <a
                                    class="nav-item sl-menu-item dropdown-toggle"
                                    href={"#"}
                                    role="button"
                                    aria-expanded="false">Item one</a
                                >
                                <ul
                                    class="third-level dropdown-menu"
                                    role="menu"
                                >
                                    <li>
                                        <a
                                            class="nav-item tl-menu-item"
                                            href={"#"}
                                            role="menuitem">Item one</a
                                        >
                                    </li>
                                    ...
                                </ul>
                            </li>
                            <li>
                                <a class="nav-item sl-menu-item" href={"#"}
                                    >Item two</a
                                >
                            </li>
                            ...
                        </ul>
                    </li>
                    <li class="second-level-children">
                        <a
                            class="nav-item fl-menu-item"
                            href={"#"}
                            role="menuitem">Item three</a
                        >
                    </li>
                    <li class="menudrop dropdown">
                        <a
                            class="dropdown-toggle"
                            href={"#"}
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <span class="hidden">Menu</span>
                            <i class="icon-align-justify" />
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-right"
                            role="menu"
                        >
                            <li class="second-level-children">
                                <a
                                    class="nav-item fl-menu-item"
                                    href={"#"}
                                    role="menuitem">Item four</a
                                >
                            </li>
                            <li class="second-level-children">
                                <a
                                    class="nav-item fl-menu-item"
                                    href={"#"}
                                    role="menuitem">Item five</a
                                >
                            </li>
                            <li class="second-level-children">
                                <a
                                    class="nav-item fl-menu-item"
                                    href={"#"}
                                    role="menuitem">Item six</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul
                    class="nav navbar-nav nav-tabs navbar-right first-level context-selector"
                >
                    <li class="icon attention">
                        <a role="button" href={"#"} aria-label="Alert">
                            <span
                                class="vismaicon vismaicon-menu vismaicon-alert"
                                aria-hidden="true"
                            />
                        </a>
                    </li>
                    ...
                    <li class="dropdown user-dropdown pristine icon">
                        <a
                            role="dropdown-toggle button-context button"
                            href={"#"}
                            data-toggle="dropdown"
                        >
                            Christian M.
                            <span
                                class="vismaicon vismaicon-menu vismaicon-user"
                            />
                            <small class="selectedContext"
                                >Cool Company name AB</small
                            >
                            <span class="caret" />
                        </a>
                        <ul class="dropdown-menu company-selection" role="menu">
                            <li class="user-details-area clear" role="menuitem">
                                <div title="christian.mcbale.jr@somemail.com">
                                    <div class="user-image">
                                        <img src="..." alt="..." />
                                    </div>
                                    <div class="user-text">
                                        <span>Christian Mcbale Jr.</span>
                                        <span class="text-disabled"
                                            >christian.mcbale.jr@mail.com</span
                                        >
                                    </div>
                                </div>
                            </li>
                            <li class="divider" />
                            <li role="menuitem">
                                <a href={"#"}>My profile</a>
                            </li>
                            <li role="menuitem">
                                <a href={"#"}>Language</a>
                            </li>
                            <li role="menuitem">
                                <a href={"#"}>My location</a>
                            </li>
                            <li class="divider" />
                            <li role="menuitem">
                                <a href={"#"}>Help</a>
                            </li>
                            <li role="menuitem">
                                <a href={"#"}>Report a problem</a>
                            </li>
                            <li class="divider" />
                            <li
                                class="context-footer company-selection-footer clear"
                                role="menuitem"
                            >
                                <a
                                    href={"#"}
                                    class="log-out-link  vismaicon-sm vismaicon-dynamic vismaicon vismaicon-logout"
                                    >Log out</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    </ShadowDOM>
</template>
