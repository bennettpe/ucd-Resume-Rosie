function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="/TheGitHubAPI-master/02-initial_data_retrieval_setup/assets/css/Loading.gif" alt="loading..." />
        </div>`);
}
