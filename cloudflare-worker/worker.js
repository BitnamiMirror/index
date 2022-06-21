import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: GITHUB_TOKEN
})

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const headers = request.headers

    const res1 = await octokit.request('POST /repos/BitnamiMirror/index/merge-upstream', {
        owner: 'bitnami',
        repo: 'charts',
        branch: 'index'
    })
    
    console.log(res1)
    const res2 = await octokit.request('POST /repos/BitnamiMirror/index/merge-upstream', {
        owner: 'bitnami',
        repo: 'charts',
        branch: 'master'
    })
    
    console.log(res2)

    const res3 = await octokit.request('POST /repos/BitnamiMirror/index/merge-upstream', {
        owner: 'bitnami',
        repo: 'charts',
        branch: 'archive-full-index'
    })

    console.log(res3)

    return new Response(`{ "ok": true }`, {
        headers: { "content-type": "application/json" },
    });
}