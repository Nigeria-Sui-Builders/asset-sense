# Asset Sense

Your intelligent Sui wallet manager. Detect spam, organize assets, and keep your wallet secure and clutter-free.

## 🚀 Features

### 🛡️ Security Scan
- Real-time threat detection for potentially harmful NFTs
- Smart contract analysis to identify malicious airdrops and phishing attempts
- Suspicious pattern recognition to protect your assets

### 🗂️ Smart Organization
- AI-powered automatic categorization of assets by type
- Custom folder creation for better organization
- Spam filtering and hiding capabilities

### 🧹 Easy Cleanup
- One-click bulk actions to hide, transfer, or remove unwanted items
- Safe asset burning functionality
- Quick hide/unhide toggles to reclaim wallet space

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Blockchain**: Sui Network integration via Mysten Dapp Kit
- **State Management**: TanStack Query for data fetching
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assetsense
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

5. **Preview the production build**
   ```bash
   pnpm run preview
   ```

## 🔧 Available Scripts

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build the project for production
- `pnpm run lint` - Run ESLint for code quality checks
- `pnpm run preview` - Preview the production build locally

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── button.tsx          # Reusable button component
│   ├── landingPage.tsx         # Landing page with features and CTA
│   ├── navBar.tsx              # Navigation bar component
│   ├── nftCard.tsx             # NFT/asset card display component
│   ├── toggleTheme.tsx         # Theme toggle component
│   └── walletManager.tsx       # Main wallet management interface
├── hooks/
│   └── useTheme.tsx            # Custom theme hook
├── providers/
│   ├── index.tsx               # Provider composition
│   ├── query.tsx               # TanStack Query provider
│   ├── sui.tsx                 # Sui blockchain provider
│   └── theme.tsx               # Theme context provider
├── App.tsx                     # Main application component
├── index.css                   # Global styles and Tailwind imports
└── main.tsx                    # Application entry point
```

## 🔗 Integrations

### Sui Network
- **Network Support**: Devnet, Testnet, Mainnet
- **Default Network**: Testnet
- **Auto-connect**: Wallet auto-connection on page load
- **Query Capabilities**: Owned objects fetching, object details retrieval

### Wallet Connection
- Seamless wallet connection via Mysten Dapp Kit
- Support for popular Sui wallets
- Non-custodial - private keys never stored

## 🎨 Design System

- **Dark/Light Theme**: Automatic system preference detection with manual toggle
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Modern UI**: Clean, modern interface with smooth animations and transitions
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🔒 Security Features

- **Non-custodial**: Never stores private keys or sensitive wallet information
- **Client-side Processing**: All wallet operations happen locally
- **Threat Detection**: Built-in spam and malicious NFT detection
- **Safe Operations**: Secure asset management with user confirmation

## 🚀 Getting Started

1. **Connect Wallet**: Click "Connect Wallet" on the landing page
2. **Scan Assets**: Asset Sense automatically scans your wallet contents
3. **Review & Organize**: View categorized assets with spam detection
4. **Clean Up**: Use bulk actions to organize and clean your wallet

## 🤝Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Mysten Dapp Kit](https://github.com/MystenLabs/dapp-kit) for Sui integration
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
