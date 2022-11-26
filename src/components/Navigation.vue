<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/portfolio">My Portfolio</RouterLink>
                    </li>
                </ul>
                <li class="d-flex about-me">
                    <RouterLink class="nav-link" to="/about-me">About me</RouterLink>
                </li>
                <li class="d-flex home">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                </li>
            </div>
        </div>
    </nav>
    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name:  "Navigation"
}
</script>

