import Link from 'next/link';

export default function Question({ username, title, content, updated, id, level }) {

  function parseTime(time) {
    const updated_time = {
      year: parseInt(time.substring(0, 4)),
      month: parseInt(time.substring(5, 7)),
      day: parseInt(time.substring(8, 10)),
      hour: parseInt(time.substring(11, 13)),
      minute: parseInt(time.substring(14, 16)),
      second: parseInt(time.substring(17, 19)),
    };
    const d = new Date();
    const curr_year = d.getFullYear();
    if (updated_time.year !== d.getFullYear()) return `${curr_year - updated_time.year} years ago`
    const curr_month = d.getMonth() + 1;
    if (updated_time.month !== curr_month) return `${curr_month - updated_time.month} months ago`
    const curr_day = d.getDate();
    if (updated_time.day !== curr_day) return `${curr_day - updated_time.day} days ago`
    const curr_hour = d.getHours();
    if (updated_time.hour !== curr_hour) return `${curr_hour - updated_time.hour} hours ago`
    const curr_minute = d.getMinutes();
    if (updated_time.minute !== curr_minute) return `${curr_minute - updated_time.minute} minutes ago`
    return `${d.getSeconds() - updated_time.second} seconds ago`;
  }

  const passedTime = parseTime(updated);

  return (
    <div>
      <Link href={{
        pathname: `/question/${id}`,
      }}>
        <a>
          <div class="w-3/4 mx-auto mt-4 shadow p-3 bg-white flex">
            <div class="p-3">
              <img src="https://www.pngrepo.com/download/2880/chat-bubbles-with-ellipsis.png" class="w-12 opacity-70" />
            </div>
            <div class="flex items-stretch flex-1 pl-2">
              <div class="self-center leading-tight">
                <span class="font-bold">{title}</span><br />
                <span class="text-gray-700 text-sm">
                  {content}
                </span>
              </div>
            </div>
            <div class="flex items-stretch">
              <div class="self-center flex">
                <img
                  src="https://www.pngrepo.com/download/2880/chat-bubbles-with-ellipsis.png"
                  class="w-10 rounded-full"
                />
                <div class="leading-none text-sm self-center pl-2 pr-4">
                  Level: {level}<br />
                  <span class="text-xs text-gray-600">
                    by {username} &bull; {passedTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}