(function() {
    function joinTeam(teamName) {
        alert(`Thank you for expressing interest in the ${teamName}! We will get back to you soon.`);
    };
    
    /** Get button by ID if exists */
    const btn = document.querySelector('#join-btn');

    if (btn) {
        const team = btn.dataset.team;
        btn.addEventListener('click', joinTeam.bind(null, team));
    }
})();
