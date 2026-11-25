[![One-Line Laugh-Off](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Rank](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Bozet404/u-zkhiel-one-line-laugh-off-714618ae/rank.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
[![Reward](https://make.fun/badge/u-zkhiel-one-line-laugh-off-714618ae/Bozet404/u-zkhiel-one-line-laugh-off-714618ae/reward.svg)](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)

# One-Line Laugh-Off

Entry for the make.fun bounty
[u-zkhiel-one-line-laugh-off-714618ae](https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae)
($2, closes 26 Nov 2026 20:45 WIB).

The brief asks for exactly one funny line: a single joke that lands on a
cold read, with no setup notes and no explanation. The line has to stand on
its own.

## The line

> I asked my fridge for dating advice. It said, 'Stop opening me at 2 a.m. looking for something that isn't there.'

The setup sounds like a harmless chat with an appliance; the punchline flips
it — the fridge is not talking about food at all, it is talking about love.
The turn lands in the last six words.

## How it works

`main.ts` writes the line — and nothing else — to `/output/entry.txt`.
Before writing it checks the competition gate itself: the text must be
1 to 200 characters, not only whitespace, and exactly one line. If the line
failed that check, the program would throw instead of writing a bad entry.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
