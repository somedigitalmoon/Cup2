import { A } from '@solidjs/router'

export default function FAQ() {
  return (
    <div class="flex flex-col gap-4 p-8">
      <h1 class="-mt-2 pb-2 text-4xl font-bold">FAQ</h1>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">What is Cup²?</div>
        <div class="collapse-content">
          <p>Cup² is a web proxy used to unblock websites at work or school. Your traffic is not end to end encrypted so yes we can read it. </p>
        </div>
      </div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">How do I use it?</div>
        <div class="collapse-content">
          <p>
            Navigate to the home page and type in a URL or search query. You can also launch a preset{' '}
            <A href="/shortcuts" class="underline underline-offset-2">
              shortcut
            </A>{' '}
            or{' '}
            <A href="/game" class="underline underline-offset-2">
              game
            </A>
            .
          </p>
        </div>
      </div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">Why is the proxy slow?</div>
        <div class="collapse-content">
          <p>The proxy is hosted on a shared server that serves all users. If there is a significant amount of users at one time, it can cause network congestion and slow down requests. </p>
        </div>
      </div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">How do I support this proxy</div>
        <div class="collapse-content">
          <p>Don't send me money, donate to @proudparrot2, the original developer of Mocha.</p>
        </div>
      </div>
    </div>
  )
}
