param(
    [string]$fileToWatch
)

if (-not $fileToWatch) {
    Write-Error "Usage: ./runrollup.ps1 <file_name>"
}

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = (Get-Item $fileToWatch).DirectoryName
$watcher.Filter = (Get-Item $fileToWatch).Name
$watcher.IncludeSubdirectories = $false
$watcher.EnableRaisingEvents = $true

$action = {
    Write-Host "File change detected. Running rollup..."
    Invoke-Expression "npx rollup -p @rollup/plugin-node-resolve .\js\animation.js -o bundle.js"
}

Register-ObjectEvent -InputObject $watcher -EventName "Changed" -SourceIdentifier "FileChanged" -Action $action

try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
}
finally {
    Unregister-Event -SourceIdentifier "FileChanged"
}