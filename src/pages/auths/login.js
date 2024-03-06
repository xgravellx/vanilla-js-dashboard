import ecole from '../../assets/ecole.jpeg';

export default function Login() {
    const pageElement = document.createElement('div');
    pageElement.className = 'vh-100';

    pageElement.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-12 col-md-9">
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <!-- Nested Row within Card Body -->
                            <div class="row-center">
                                <div class="col-lg-5   d-sm-block bg-login-image mx-auto ">
                                    <div class="card">
                                        <img id="bg-42-ecole" class="card-img-center mt-5" alt="Card image cap">
                                    </div>
                                </div>
                                <div class="col-lg-6 d-sm-block bg-login-image mx-auto ">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" id="login-form">
                                            <div class="form-group mb-2">
                                                <label for="email">Email</label>
                                                <input
                                                        type="email"
                                                        class="form-control form-control-user"
                                                        id="email"
                                                        placeholder="Enter Email Address..."
                                                        name="email"
                                                        required
                                                >
                                            </div>
                                            <div class="form-group mb-2">
                                                <label for="password">Password</label>
                                                <input
                                                        type="password"
                                                        class="form-control form-control-user"
                                                        id="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        required
                                                >
                                            </div>
                                            <button type="submit" class="btn btn-secondary btn-user btn-block col-md-12">Login</button>
                                        </form>
                                        <hr>
                                        <div class="text-center">
                                            <a class="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    window.onload = () => {
        const imageElement = pageElement.querySelector('#bg-42-ecole');
        imageElement.src = ecole;
    };

    return pageElement;
}