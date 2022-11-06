<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link active" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/portfolio">My Portfolio</RouterLink>
                </li>
            </ul>
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

