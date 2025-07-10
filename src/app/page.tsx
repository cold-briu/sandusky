import {
  Navigation,
  HeroCard,
  SocialMediaCard,
  Web3DataCard,
  GitHubStatsCard,
  LinksMenuCard
} from '../components'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <HeroCard />
        <SocialMediaCard />
        <Web3DataCard />
        <GitHubStatsCard />
        <LinksMenuCard />
      </main>
    </div>
  )
}
