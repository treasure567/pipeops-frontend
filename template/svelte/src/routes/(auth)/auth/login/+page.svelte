<script>
    import { signin, loading } from '$lib/auth'

    let isLoading = false;

    loading.set(false);

    loading.subscribe((value) => {
        isLoading = value;
    });

    let email = 'uvietoboretreasure@gmail.com', password = '123456789';

    const handleSignin = async () => {
        await signin(email, password)
    }
</script>
<body class="start">
    <main>
        <div class="layout">
            <div class="main order-md-1">
                <div class="start">
                    <div class="container">
                        <div class="col-md-12">
                            <div class="content">
                                <h1>Sign in to Swipe</h1>
                                <form id="formAuthentication" on:submit|preventDefault={handleSignin}>
                                    <div class="form-group">
                                        <input type="email" id="inputEmail" class="form-control" placeholder="johndoe@example.com" bind:value={email} required>
                                        <button class="btn icon"><i class="material-icons">mail_outline</i></button>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" bind:value={password} required>
                                        <button class="btn icon"><i class="material-icons">lock_outline</i></button>
                                    </div>
                                    {#if isLoading}
                                    <button type="submit" class="btn btn-primary btn-block button" id="signInBtn" formaction="index-2.html">
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span class="spinner-text">Signing In...</span>
                                    </button>
                                    {:else}
                                    <button type="submit" class="btn button" formaction="index-2.html">Sign In</button>
                                    {/if}
                                    <div class="callout">
                                        <span>Don't have account? <a href="sign-up.html">Create Account</a></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aside order-md-2">
                <div class="container">
                    <div class="col-md-12">
                        <div class="preference">
                            <h2>Hello, Friend!</h2>
                            <p>Enter your personal details and start your journey with Swipe today.</p>
                            <a href="sign-up.html" class="btn button">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>